define([
    'kernel/MessageSender'
], function (
    MessageSender
) {
    'use strict';

    return new MessageSender([
        'showWidget',
        'showLoading'
    ], true);
});
