import React from 'react';

import {
  ScrollView,
  View
} from 'react-native';
import { Message } from '../Message';

import { styles } from './styles';

const message = {
  id: '1',
  text: 'Mensagem de teste testando',
  user: {
    name: 'Cauany',
    avatar_url: 'http://github.com/cauany.png'
  }
}

export function MessageList(){
  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
      
    </ScrollView>
  );
}