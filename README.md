SuisseCoin  
==========
[relocated from https://github.com/RagnarDanneskjold/SwissCoin]

SuisseCoin works by encoding SWIFT & FIX opcodes, semantics into transactions and then spending to the corresponding addresses. SuisseCoin specifies a format for creating transactions which conform to the protocol, and therefore can be indexed by clients and SWIFT/FIX trannsport layer.

SuisseCoin is a token protocol [transport layer] using outputs from two or more different keypairs [for ex - bitcoin[client]and GPG [host]] controlled by a single user 'binary-key'.

Let’s take a second to clarify an important point: tokens != protocols.

Tokens are the form that issued credentials take to be transported, from authority to client and from client to resource. Protocols detail the ceremony that apps use to send users to authenticate to an authority and/or clients use for sending tokens to apps for gaining authenticated access. In other words, protocols are used for moving tokens.

A Proof Token allows the requestor to use a key that’s locked in a token encrypted for somebody else and communicates the session key to the requestor in a format that it can understand.

A Bearer Token is security token with the property that any party in possession of the token (a "bearer") can use the token in any way that any other party in possession of it can. Using a bearer token does not require a bearer to prove possession of cryptographic key material (proof-of-possession).

signrawtransactionX <hex string> [{"txid":txid,"vout":n,"scriptPubKey":hex},...] [<###>,...] [sighash="ALL"]

signrawtransactionY <hex string> [{"txid":txid,"vout":n,"scriptPubKey":hex},...] [<privatekey1>,...] [sighash="ALL"]

IF signrawtransactionY operand condition = True, THEN signrawtransactionX <hex string> [{"txid":txid,"vout":n,"scriptPubKey":hex},...] [<privatekey1>,...] [sighash="ALL"]

crosschain query:

var txHashes = ['xyz', '123']
proofchain.transactions.getBatch X [txidN-txidN+1 * span/(outpts=m)]

(txHashes, function (err, resp, resource) {
/*use the resource*/});



see also:
http://www.cloudidentity.com/blog/2014/03/03/principles

http://www.cloudidentity.com/blog/2008/01/02/on-prooftokens/

http://tools.ietf.org/html/rfc6750

https://github.com/TSavo/Link

https://github.com/abeltje/Business-IBAN-Validator

https://github.com/arthurdejong/python-stdnum/blob/master/getiban.py

http://www.fixtradingcommunity.org/pg/structure/tech-specs/fix-version/50

https://code.google.com/p/libfenc/

http://atdl4j.org/

https://github.com/quickfix/quickfix

http://www.iso20022.org/full_catalogue.page

