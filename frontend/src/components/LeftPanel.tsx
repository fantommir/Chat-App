import React from 'react';
import { User } from '../types/User';
import "../css/global.css";
import UsersView from './UsersView';
import { GroupChat } from '../types/GroupChat';
import GroupChatsView from './GroupChatsView';

interface LeftPanelProp {
    user: User,
    tab: string,
    setTab: (newTab: string) => void,
    groupChats: GroupChat[],
    fetchGroupChats: () => void,
    groupChatId: number,
    setGroupChatId: (groupChatId: number) => void
}

const LeftPanel: React.FC<LeftPanelProp> = (props: LeftPanelProp) => {

    const setTab = props.setTab;
    
    const newChat = () => {
        setTab("newChat");
    }

    const profile = () => {
        setTab("profile");
    }

    return(
    <>
        <div className="bg-light rounded-start overflow-auto" id="AvailableChats">
            <UsersView users={[props.user]}/>
            <div className="border-bottom d-flex justify-content-evenly py-2">
                <button className="btn btn-dark btn-sm" onClick={newChat}>
                    New Chat
                </button>
                <button className="btn btn-dark btn-sm" onClick={profile}>
                    Profile
                </button>
            </div>
            <GroupChatsView groupChats={props.groupChats} tab={props.tab} setTab={setTab} fetchGroupChats={props.fetchGroupChats} groupChatId={props.groupChatId} setGroupChatId={props.setGroupChatId}/>
        </div>
    </>
    )
}

export default LeftPanel;