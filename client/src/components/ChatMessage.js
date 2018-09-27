import React from 'react';
import { SEgment, Divider, Segment } from 'semantic-ui-react'

const ChatMessage = ({ body, email = 'anon' }) => (
  <Segment>
    <i>{email}</i>
    <Divider hidden />
    <blockquote>{body}</blockquote>
  </Segment>
)

export default ChatMessage