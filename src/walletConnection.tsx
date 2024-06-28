import { ConnectAccount } from '@coinbase/onchainkit/wallet';
import { getTokens } from '@coinbase/onchainkit/token';

import { ConnectWallet, Wallet, WalletDropdown, WalletDropdownLink, WalletDropdownDisconnect } from '@coinbase/onchainkit/wallet';

import { Address, Avatar, Name, Badge, Identity, EthBalance } from '@coinbase/onchainkit/identity';

export function WalletComponents() {
  return (
      <Wallet>
        <ConnectWallet>
          <Avatar/>
          <Name />
        </ConnectWallet>
        <WalletDropdown>
          <Identity hasCopyAddressOnClick>
            <Avatar />
            <Name>
              <Badge />
            </Name>
            <Address />
            <EthBalance />
          </Identity>
          <WalletDropdownLink icon="wallet" href="https://wallet.coinbase.com">
            Go to Wallet Dashboard
          </WalletDropdownLink>
        </WalletDropdown>
      </Wallet>

  );
}

export function showWalletAddress() {
  return (<div>{Address.address}</div>)
}

//export default WalletComponents;