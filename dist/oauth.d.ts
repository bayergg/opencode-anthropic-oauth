declare const USER_AGENT: string;
declare const BETA_FLAGS: string;
export { USER_AGENT, BETA_FLAGS };
export interface OAuthTokens {
    access: string;
    refresh: string;
    expires: number;
}
export declare function createAuthorizationRequest(): {
    url: string;
    verifier: string;
};
export declare function parseAuthCode(raw: string): string;
export declare function exchangeCodeForTokens(rawCode: string, verifier: string): Promise<OAuthTokens>;
export declare function refreshTokens(refreshToken: string): Promise<OAuthTokens>;
