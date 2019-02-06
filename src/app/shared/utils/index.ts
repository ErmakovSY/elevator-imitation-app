import { Subscription } from 'rxjs';

/**
 * Destroys all subscriptions from {subscribers} object
 */
export function destroySubscribers(subscribers: { [key: string]: Subscription }) {
  for (const subsciber in subscribers) {
    if (subscribers[subsciber] && subscribers[subsciber].unsubscribe) {
      subscribers[subsciber].unsubscribe();
    }
  }
}
