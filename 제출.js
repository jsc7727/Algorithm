const submit = [
    {
        name: 'ha-section-3-server',
        timestamp: '2022-02-25T08:41:54.095Z'
    },
    { name: 'im-ha-section-1', timestamp: '2022-01-20T07:50:37.041Z' },
    { name: 'im-ha-section-1', timestamp: '2022-01-20T08:24:57.318Z' },
    {
        name: 'react-custom-component',
        timestamp: '2022-02-03T18:46:33.539Z'
    },
    {
        name: 'react-custom-component',
        timestamp: '2022-02-04T07:32:23.343Z'
    },
    { name: 'pre-sprint-tree-ui', timestamp: '2022-01-17T08:05:41.939Z' },
    {
        name: 'auth-session-server',
        timestamp: '2022-02-16T10:54:03.760Z'
    },
    { name: 'cmarket-redux', timestamp: '2022-02-07T08:00:10.933Z' },
    { name: 'react-twittler-spa', timestamp: '2022-01-13T05:43:05.788Z' },
    {
        name: 'im-sprint-statesairline-server',
        timestamp: '2022-01-26T15:45:57.135Z'
    },
    {
        name: 'im-sprint-statesairline-server',
        timestamp: '2022-01-28T09:54:41.329Z'
    },
    {
        name: 'react-twittler-state-props',
        timestamp: '2022-01-13T05:40:02.506Z'
    },
    {
        name: 'react-twittler-state-props',
        timestamp: '2022-01-13T05:41:51.672Z'
    },
    {
        name: 'pre-sprint-stringify-json',
        timestamp: '2022-01-17T08:01:52.837Z'
    },
    {
        name: 'ha-section-3-client',
        timestamp: '2022-02-25T08:41:32.395Z'
    },
    { name: 'auth-oauth-server', timestamp: '2022-02-18T07:44:45.612Z' },
    { name: 'async-and-promise', timestamp: '2022-01-19T07:34:06.911Z' },
    { name: 'learn-sql', timestamp: '2022-02-10T07:24:40.389Z' },
    { name: 'validation-check', timestamp: '2022-01-06T05:56:51.592Z' },
    { name: 'calculator', timestamp: '2021-12-31T02:59:00.911Z' },
    {
        name: 'cmarket-database-server',
        timestamp: '2022-02-10T20:43:09.553Z'
    },
    { name: 'auth-token-server', timestamp: '2022-02-17T08:07:24.032Z' },
    { name: 'auth-token-client', timestamp: '2022-02-17T07:52:39.311Z' },
    {
        name: 'auth-session-client',
        timestamp: '2022-02-16T10:53:48.030Z'
    },
    { name: 'im-sprint-underbar', timestamp: '2022-01-18T12:48:21.324Z' },
    {
        name: 'react-twittler-intro',
        timestamp: '2022-01-10T08:12:50.500Z'
    },
    {
        name: 'react-twittler-intro',
        timestamp: '2022-01-17T08:09:58.984Z'
    },
    { name: 'query-selector', timestamp: '2021-12-31T03:00:01.112Z' },
    { name: 'query-selector', timestamp: '2022-01-03T09:17:42.641Z' },
    {
        name: 'im-sprint-statesairline-client',
        timestamp: '2022-01-26T04:08:55.326Z'
    },
    {
        name: 'im-sprint-statesairline-client',
        timestamp: '2022-01-26T09:31:34.232Z'
    },
    { name: 'cli-practice', timestamp: '2021-12-31T02:53:45.049Z' },
    { name: 'cli-practice', timestamp: '2021-12-31T06:23:23.364Z' },
    { name: 'cli-practice', timestamp: '2022-01-20T08:50:14.102Z' },
    { name: 'auth-oauth-client', timestamp: '2022-02-18T07:44:53.802Z' }
]
submit.sort((a, b) => {
    return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()

})
const result = new Set(submit.map(v => v.name));
console.log(result);