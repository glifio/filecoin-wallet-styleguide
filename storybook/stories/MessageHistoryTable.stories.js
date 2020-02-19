import React from 'react'
import { MessageHistoryTable } from '@openworklabs/filecoin-wallet-styleguide'

export default {
  title: 'MessageHistoryTable'
}

const messages = [
  {
    cid: 'bafy2bzaceaa3pmye6ralr6ekgsijt2s36dihs3de3g4ccwstrlpl325x45go4',
    from:
      't3wjxuftije2evjmzo2yoy5ghfe2o42mavrpmwuzooghzcxdhqjdu7kn6dvkzf4ko37w7sfnnzdzstcjmeooea',
    to: 't1jdlfl73voaiblrvn2yfivvn5ifucwwv5f26nfza',
    nonce: '23344',
    value: '5000000000000000',
    gasprice: '0',
    gaslimit: '1000',
    method: '0',
    status: 'pending',
    gas_used: 196
  },
  {
    cid: 'bafy2bzaceaxnjvbobj4kic7fqloov2apfna6t2kd23whq3p3qjjgx33atwj2w',
    from:
      't3wjxuftije2evjmzo2yoy5ghfe2o42mavrpmwuzooghzcxdhqjdu7kn6dvkzf4ko37w7sfnnzdzstcjmeooea',
    to: 't1jdlfl73voaiblrvn2yfivvn5ifucwwv5f26nfza',
    nonce: '21349',
    value: '5000000000000000',
    gasprice: '0',
    gaslimit: '1000',
    method: '0',
    gas_used: 196,
    status: 'confirmed'
  }
]

export const MessageHistoryTablePrimary = () => (
  <MessageHistoryTable
    messages={messages}
    address="t1jdlfl73voaiblrvn2yfivvn5ifucwwv5f26nfza"
  />
)
