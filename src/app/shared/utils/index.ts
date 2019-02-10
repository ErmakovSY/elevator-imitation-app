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

/**
 * Returns a random integer between value - delta (inclusive) and value + delta (inclusive)
 */
export function getRandomValue(value: number, delta: number): number {
  const min = Math.ceil(value - delta);
  const max = Math.floor(value + delta);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
