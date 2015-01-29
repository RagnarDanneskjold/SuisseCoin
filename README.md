SuisseCoin  
==========

SuisseCoin is a token protocol [transport layer] using outputs from two or more different keypairs [for ex - bitcoin[client]and GPG id [host] derived from or combined into a single user 'binary-key' or a password seed to generate a deterministic wallet and GPG keypair.
Let’s take a second to clarify an important point: tokens != protocols.
Tokens are the form that issued credentials take to be transported, from authority to client and from client to resource. Protocols detail the ceremony that apps use to send users to authenticate to an authority and/or clients use for sending tokens to apps for gaining authenticated access. In other words, protocols are used for moving tokens.
A Proof Token allows the requestor to use a key that’s locked in a token encrypted for somebody else and communicates the session key to the requestor in a format that it can understand.
A Bearer Token is security token with the property that any party in possession of the token (a "bearer") can use the token in any way that any other party in possession of it can. Using a bearer token does not require a bearer to prove possession of cryptographic key material (proof-of-possession).
SuisseCoin bearer-proof tokens could be considered legitimate & validated to the networks once a few criteria and proofs are met: 1. Counterparty A [CP-A] must obtain two keypairs and some quantity of cryptocoins in order to 'mint' or generate new bearer/proof tokens. 2.Counterparty B [CP-B] places order for asset represented by Suisse bearer-proof token using bitcoin sent to the seller's public 'Suisse' bitcoin address using prescribed opcodes[tags]. 4. CP-A then registers/signs the BTC transaction id/blankhash to the bearer-proof token address, broadcasts the transaction hashed using GPG signature. 5. At this point, the transaction could be considered an asset quantity accounted, notarized / signed over to CP-B who can then demonstrate 'ownership' of the asset because its last token input is a receipt / proof-of-purchase with merchant op-codes identifying GPG signature



see also:
http://www.cloudidentity.com/blog/2014/03/03/principles

http://www.cloudidentity.com/blog/2008/01/02/on-prooftokens/

http://tools.ietf.org/html/rfc6750

https://en.bitcoin.it/wiki/Atomic_cross-chain_trading#Solution_using_specialized_altchain

https://github.com/TSavo/Link

https://github.com/abeltje/Business-IBAN-Validator

https://github.com/arthurdejong/python-stdnum/blob/master/getiban.py

http://www.fixtradingcommunity.org/pg/structure/tech-specs/fix-version/50

https://code.google.com/p/libfenc/

http://atdl4j.org/

https://github.com/quickfix/quickfix

http://www.iso20022.org/full_catalogue.page

