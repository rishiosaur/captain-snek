export interface Item {
    type: string;
    channel: string;
    ts: string;
}

export interface Event {
    type: string;
    user: string;
    item: Item;
    reaction: string;
    item_user: string;
    event_ts: string;
}

export interface Body {
    token: string;
    team_id: string;
    api_app_id: string;
    event: Event;
    type: string;
    event_id: string;
    event_time: number;
    authed_users: string[];
}

export interface Item2 {
    type: string;
    channel: string;
    ts: string;
}

export interface Payload {
    type: string;
    user: string;
    item: Item2;
    reaction: string;
    item_user: string;
    event_ts: string;
}

export interface Item3 {
    type: string;
    channel: string;
    ts: string;
}

export interface Event2 {
    type: string;
    user: string;
    item: Item3;
    reaction: string;
    item_user: string;
    event_ts: string;
}

export interface Context {
    botToken: string;
    botUserId: string;
    botId: string;
}

export interface Events {
}

export interface Approved {
}

export interface Requests {
}

export interface Restricted {
}

export interface Apps {
    approved: Approved;
    requests: Requests;
    restricted: Restricted;
}

export interface Conversations {
}

export interface Approved2 {
}

export interface Denied {
}

export interface InviteRequests {
    approved: Approved2;
    denied: Denied;
}

export interface Admins {
}

export interface Owners {
}

export interface Settings {
}

export interface Teams {
    admins: Admins;
    owners: Owners;
    settings: Settings;
}

export interface Session {
}

export interface Users {
    session: Session;
}

export interface Admin {
    apps: Apps;
    conversations: Conversations;
    inviteRequests: InviteRequests;
    teams: Teams;
    users: Users;
}

export interface Api {
}

export interface Auth {
}

export interface Bots {
}

export interface Channels {
}

export interface ScheduledMessages {
}

export interface Chat {
    scheduledMessages: ScheduledMessages;
}

export interface Conversations2 {
}

export interface Views {
}

export interface Dialog {
}

export interface Dnd {
}

export interface Emoji {
}

export interface Comments {
}

export interface Remote {
}

export interface Files {
    comments: Comments;
    remote: Remote;
}

export interface Groups {
}

export interface Im {
}

export interface Migration {
}

export interface Mpim {
}

export interface V2 {
}

export interface Oauth {
    v2: V2;
}

export interface Pins {
}

export interface Reactions {
}

export interface Reminders {
}

export interface Rtm {
}

export interface Search {
}

export interface Stars {
}

export interface Profile {
}

export interface Team {
    profile: Profile;
}

export interface Users2 {
}

export interface Usergroups {
    users: Users2;
}

export interface Profile2 {
}

export interface Users3 {
    profile: Profile2;
}

export interface RetryConfig {
    retries: number;
    factor: number;
    randomize: boolean;
}

export interface Queue {
    _queue: any[];
}

export interface RequestQueue {
    queue: Queue;
    _pendingCount: number;
    _concurrency: number;
    _isPaused: boolean;
}

export interface TlsConfig {
}

export interface Logger {
    level: string;
    name: string;
}

export interface Client {
    _events: Events;
    _eventsCount: number;
    admin: Admin;
    api: Api;
    auth: Auth;
    bots: Bots;
    channels: Channels;
    chat: Chat;
    conversations: Conversations2;
    views: Views;
    dialog: Dialog;
    dnd: Dnd;
    emoji: Emoji;
    files: Files;
    groups: Groups;
    im: Im;
    migration: Migration;
    mpim: Mpim;
    oauth: Oauth;
    pins: Pins;
    reactions: Reactions;
    reminders: Reminders;
    rtm: Rtm;
    search: Search;
    stars: Stars;
    team: Team;
    usergroups: Usergroups;
    users: Users3;
    token: string;
    slackApiUrl: string;
    retryConfig: RetryConfig;
    requestQueue: RequestQueue;
    tlsConfig: TlsConfig;
    rejectRateLimitedCalls: boolean;
    logger: Logger;
}

export interface Logger2 {
    level: string;
    name: string;
}

export interface ReactionAddedOutput {
    body: Body;
    payload: Payload;
    event: Event2;
    context: Context;
    client: Client;
    logger: Logger2;
}
