import {
  isArray, isFunction, isString, get
} from 'lodash';

let messages = {};

window.messages = messages;

export function publish(topic, ...args) {
  const handles = get(messages, `${topic}.handles`) || [];
  messages[topic] = { status: 2, args, handles };
  handles.forEach(handle => {
    handle(...args);
  });
}

export function subscribe(topic, handle) {
  if (!isFunction(handle)) {
    return false;
  }
  const message = messages[topic] || { status: 1, handles: [] };
  message.handles.push(handle);
  messages[topic] = message;
  if (message.status === 1) {
    return;
  }
  handle(...message.args);
}

export function unsubscribe(topic, handle) {
  if (!messages[topic]) {
    return;
  }
  if (!handle) {
    messages[topic].handles = [];
    return;
  }
  const { handles } = messages[topic];
  for (let i = 0, len = handles.length; i < len; i++) {
    if (handles[i] === handle) {
      handles.splice(i, 1);
      break;
    }
  }
}

export function clear(topics) {
  if (isString(topics)) {
    delete messages[topics];
  } else if (isArray[topics]) {
    topics.forEach(topic => {
      delete messages[topic];
    });
  } else {
    messages = {};
  }
}
