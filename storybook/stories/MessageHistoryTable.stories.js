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
    cid: 'bafy2bzaceamz3qggtumnbqkgyldhga54y3zakvrt2deuedwkz7fk5nrsmasrs',
    from: 't1jdlfl73voaiblrvn2yfivvn5ifucwwv5f26nfza',
    to:
      't3wjxuftije2evjmzo2yoy5ghfe2o42mavrpmwuzooghzcxdhqjdu7kn6dvkzf4ko37w7sfnnzdzstcjmeooea',
    nonce: '23344',
    value: '5000000000000000',
    gasprice: '0',
    gaslimit: '1000',
    method: '0',
    status: 'pending',
    gas_used: 196
  },
  {
    cid: 'bafy2bzaceabmpnqlbfgnkc6co72mhb36v37re2loikrdldlpmwharlajma2ug',
    from: 't1hvuzpfdycc6z6mjgbiyaiojikd6wk2vwy7muuei',
    to: 't1jdlfl73voaiblrvn2yfivvn5ifucwwv5f26nfza',
    nonce: '21349',
    value: '5000000000000000',
    gasprice: '0',
    gaslimit: '1000',
    method: '0',
    gas_used: 196,
    status: 'confirmed'
  },
  {
    cid: 'bafy2bzaceabgvkl5rum5u7ctkwcmpo6ursryfyhgod35ewhoppyrhwrasdzty',
    from: 't1jdlfl73voaiblrvn2yfivvn5ifucwwv5f26nfza',
    to: 't1hvuzpfdycc6z6mjgbiyaiojikd6wk2vwy7muuei',
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
