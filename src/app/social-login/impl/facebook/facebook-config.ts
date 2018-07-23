export interface FacebookConfig {
    /** Your application ID. If you don't have one find it in the App dashboard
     * or go there to create a new app. */
    appId: string;
    /** Determines whether XFBML tags used by social plugins are parsed, and
     * therefore whether the plugins are rendered or not. Defaults to false. */
    xfbml?: boolean;
    /** Determines whether a cookie is created for the session or not. If enabled,
     * it can be accessed by server-side code. Defaults to false. */
    cookie?: boolean;
    /** Define what languge should the Facebook dialog use. Dafaults to en-US. */
    language?: string;
    /** If enabled a debug version of the facebook SDK will be used, which is not
     * minified. Defaults to false.
     */
    debug?: boolean;
}
