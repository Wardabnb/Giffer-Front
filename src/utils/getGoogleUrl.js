export function getGoogleOAuthUrl() {
  const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";

  const options = {
    redirect_uri: "http://localhost:3000/users/login/google",
    client_id:
      "332784627645-0g7mcki8nikalsnvs40eefgp5elnflc2.apps.googleusercontent.com",
    access_type: "offline",
    prompt: "consent",
    response_type: "code",
    scope: [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ].join(" "),
  };

  const qs = new URLSearchParams(options);
  return `${rootUrl}?${qs.toString()}`;
}
