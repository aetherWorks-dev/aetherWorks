import { ConnectAccount } from '@coinbase/onchainkit/wallet';
import { getTokens } from '@coinbase/onchainkit/token';

import { ConnectWallet, Wallet, WalletDropdown, WalletDropdownLink, WalletDropdownDisconnect} from '@coinbase/onchainkit/wallet';

import { Address, Avatar, Name, Badge, Identity, EthBalance } from '@coinbase/onchainkit/identity';


export function WalletComponents() {
  return (
      <Wallet>
        <ConnectWallet>
        <Address  />
          
        </ConnectWallet>
        
        <WalletDropdown>
          <Identity hasCopyAddressOnClick>
            <Name>
            </Name>
            <Address  />

            <Identity />
          </Identity>
          
          <WalletDropdownDisconnect />
        </WalletDropdown>
      </Wallet>

  );
}

export function showWalletAddress() {
  return (<div>{Address.contextAddress}</div>)
}

//export default WalletComponents;