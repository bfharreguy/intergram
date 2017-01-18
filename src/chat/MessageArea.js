import { h, Component } from 'preact';

export default class MessageArea extends Component {

    render(props,{}) {
        return (
            <ol id="messages" class="chat">
                {props.messages.map( ({text, from}) => {
                    return (
                        <li class={from}>
                            <div class="msg">
                                {text}
                            </div>
                        </li>
                    );
                })}
            </ol>
        );
    }

}