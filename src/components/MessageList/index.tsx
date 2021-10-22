import React, { useEffect, useState } from 'react';

import {
  ScrollView,
  View
} from 'react-native';
import { api } from '../../services/api';
import { Message, MessageProps } from '../Message';

import { styles } from './styles';

const message = {
  id: '1',
  text: 'Mensagem de teste testando',
  user: {
    name: 'Cauany',
    avatar_url: 'http://github.com/cauany.png'
  }
}

export function MessageList() {
  const [currentMessages, setCurrentMessages] = useState<MessageProps[]>([]);

  useEffect(() => {
    async function fetchMessages() {
      const messagesResponse = await api.get<MessageProps[]>('/messages/last3');
      setCurrentMessages(messagesResponse.data)
    }

    fetchMessages();
  })

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >

      {currentMessages.map(message => (
        <Message key={message.id} data={message} />
      ))}
      
    </ScrollView>
  );
}