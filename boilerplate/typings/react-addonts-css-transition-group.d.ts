// Compiled using typings@0.6.2
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/097e6616f04a7ab2a507ecce2afd36e63ca2a36e/react/react-addons-css-transition-group.d.ts
// Type definitions for React v0.14 (react-addons-css-transition-group)
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>, AssureSign <http://www.assuresign.com>, Microsoft <https://microsoft.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare namespace React {

    interface CSSTransitionGroupTransitionName {
        enter: string;
        enterActive?: string;
        leave: string;
        leaveActive?: string;
        appear?: string;
        appearActive?: string;
    }

    interface CSSTransitionGroupProps {
        transitionName: string | CSSTransitionGroupTransitionName;
        transitionAppear?: boolean;
        transitionAppearTimeout?: number;
        transitionEnter?: boolean;
        transitionEnterTimeout?: number;
        transitionLeave?: boolean;
        transitionLeaveTimeout?: number;
    }

    type CSSTransitionGroup = ComponentClass<CSSTransitionGroupProps>;

    namespace ReactAddons {
        export var CSSTransitionGroup: React.CSSTransitionGroup;
    }
}

declare module "react-addons-css-transition-group" {
    var CSSTransitionGroup: React.CSSTransitionGroup;
    type CSSTransitionGroup = React.CSSTransitionGroup;
    export default CSSTransitionGroup;
}
