SuisseCoin
==========

SuisseCoin works by encoding SWIFT & FIX opcodes, semantics into transactions and then spending to the corresponding addresses. SuisseCoin specifies a format for creating transactions which conform to the protocol, and therefore can be indexed by clients and SWIFT/FIX trannsport layer.

SuisseCoin is a token protocol [transport layer] using outputs from two or more different cryptocoins [for ex - bitcoin[client]and dogecoin[host]] controlled by a single user 'binary-key' or a single password seed to generate deterministic wallets on at least two separate blockchains.

Let’s take a second to clarify an important point: tokens != protocols.

Tokens are the form that issued credentials take to be transported, from authority to client and from client to resource. Protocols detail the ceremony that apps use to send users to authenticate to an authority and/or clients use for sending tokens to apps for gaining authenticated access. In other words, protocols are used for moving tokens.

A Proof Token allows the requestor to use a key that’s locked in a token encrypted for somebody else and communicates the session key to the requestor in a format that it can understand.

A Bearer Token is security token with the property that any party in possession of the token (a "bearer") can use the token in any way that any other party in possession of it can. Using a bearer token does not require a bearer to prove possession of cryptographic key material (proof-of-possession).

SuisseCoin bearer-proof tokens could be considered legitimate & validated to the networks once a few criteria and proofs are met: 1. Counterparty A [CP-A] must obtain two wallets [on separate blockchains] and some quantity of cryptocoins in order to 'mint' or generate new bearer/proof tokens. 2. CP-A secures or assays the token with active keys in QR, RFID/NFC, or similar form. 3.Counterparty B [CP-B] places order for asset represented by Suisse bearer-proof token using bitcoin sent to the seller's public 'Suisse' bitcoin address using prescribed opcodes[tags]. 4. CP-A then registers/signs the BTC transaction id/blankhash to the bearer-proof token address, broadcasts the transaction into the aux-chain ['atomic chain' trading may or may not be used here]. 5. At this point, the 'cross-chain' transaction could be considered an asset quantity accounted, notarized / signed over to CP-B who can then demonstrate 'ownership' of the asset because its last token input is a receipt / proof-of-purchase with merchant op-codes & transaction id from the customer's BTC address [*conditions apply depending on wallet/client used]
