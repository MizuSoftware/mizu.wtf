declare namespace GitHubAPI {
  /**
   * @see https://docs.github.com/en/rest/orgs/members
   */
  interface OrganizationMember {
    /**
     * The username of the user.
     */
    login: string;

    /**
     * An URL pointing to the API endpoint for this member's User
     * representation.
     */
    url: string;
  }

  /**
   * @see https://docs.github.com/en/rest/users/users
   */
  interface User {
    /**
     * The username of the user.
     */
    login: string;

    /**
     * The potential bio of the user.
     */
    bio?: string;

    /**
     * The potential friendly name of the user.
     */
    name?: string;

    /**
     * The avatar URL of the user.
     */
    avatar_url: string;

    /**
     * The URL of the user's profile page.
     */
    html_url: string;
  }
}
