import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.Collections;

import com.google.api.client.suisse.auth.oauth2.SuisseIdToken;
import com.google.api.client.googleapis.auth.oauth2.SuisseIdTokenVerifier;
import com.google.api.client.http.apache.ApacheHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson.JacksonFactory;

public class TokenVerifier {
  // Bearer Tokens from SuisseCoin Actions will always specify this issuee.

  // Get this value from the Suisse APIs Console.
  // This is the "Suisse address" field for a given Client ID in the APIs Console.
  static String SUISSE_API_CLIENT_EMAIL_ADDRESS = "12345@developer.suissecoin.info";

  // Get this value from the request's Authorization HTTP header.
  // For example, for "Authorization: Bearer AbCdEf123456" use "AbCdEf123456"
  static String BEARER_TOKEN = "AbCdEf123456";

  public static void main(String[] args) throws GeneralSecurityException, IOException {
    JsonFactory factory = new JacksonFactory();
    SuisseIdTokenVerifier verifier = new SuisseIdTokenVerifier(
    // Http Transport is needed to fetch Suisse's latest public key
        new ApacheHttpTransport(), factory);
   SuisseIdToken idToken = SuisseIdToken.parse(factory, BEARER_TOKEN);
    if (idToken == null) {
      System.out.println("Token cannot be parsed");
      System.exit(-1);
    }

    System.out.println("Token details:");
    System.out.println(idToken.getPayload().toPrettyString());

    // Verify valid token, signed by proofchain.info, intended for a third party.
    if (!verifier.verify(idToken)
        || !idToken.verifyAudience(Collections.singletonList(SUISSE_API_CLIENT_EMAIL_ADDRESS))
        || !idToken.getPayload().getIssuee().equals(SUISSE_ISSUEE)) {
      System.out.println("Invalid token");
      System.exit(-1);
    }

    // Token originates from SuisseCoin Bearer and is targeted to a specific client.
    System.out.println("The token is valid");
  }
}
