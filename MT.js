/**
 * Created by Mohammad Nezarat on 12/15/2018.
 * nezarat@gmail.com
 * Lic Apache License v2
 * version: 0.1
 */
class MT {
    static Subscribe(channel, callback) {
        let ch = this._GetChannel(channel);
        let subscription = {
            id: "s" + (ch.counter++),
            callback: callback
        };
        ch.subscribers[subscription.id] = subscription;
        return subscription;
    }

    static Unsubscribe(subscription, channel) {
        if (subscription.id) {
            let ch = this._GetChannel(channel);
            ch.subscribers[subscription.id] = null;
        }
    }

    static UnsubscribeAll(channel) {
        let ch = this._GetChannel(channel);
        ch.subscribers = null;
        ch.subscribers = [];
    }

    static Dispatch(channel, envelope ) {
        let ch = this._GetChannel(channel);
        for (let key in ch.subscribers) {
            if (ch.subscribers.hasOwnProperty(key)) {
                let subscription =  ch.subscribers[key];
                subscription.callback(envelope);
            }
        }
    }

    static _GetChannel(channel) {
        if (!window.___MT) {
            window.___MT = {
                channels: {}
            };
        }
        let mt = window.___MT;

        if (!mt.channels[channel]) {
            mt.channels[channel] = {
                subscribers: {},
                counter: 0
            };
        }
        return mt.channels[channel];
    }
}

export default MT;