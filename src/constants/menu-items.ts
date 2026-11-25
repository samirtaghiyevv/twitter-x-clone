import { Call, CallActive } from "~/components/icon/Call";
import { Chat, ChatActive } from "~/components/icon/Chat";
import { Follow, FollowActive } from "~/components/icon/Follow";
import { Grok, GrokActive } from "~/components/icon/Grok";
import { Home, HomeActive } from "~/components/icon/Home";
import {
  Notification,
  NotificationActive,
} from "~/components/icon/Notification";
import { Search, SearchActive } from "~/components/icon/Search";

export const menuItems = [
  {
    id: 1,
    path: "/",
    title: "Home",
    icon: {
      default: Home,
      active: HomeActive,
    },
  },
  {
    id: 2,
    path: "/explore",
    title: "Explore",
    icon: {
      default: Search,
      active: SearchActive,
    },
  },
  {
    id: 3,
    path: "/notifications",
    title: "Notifications",
    icon: {
      default: Notification,
      active: NotificationActive,
    },
  },
  {
    id: 4,
    path: "/connect_people",
    title: "Follow",
    icon: {
      default: Follow,
      active: FollowActive,
    },
  },
  {
    id: 5,
    path: "/chat",
    title: "Chat",
    icon: {
      default: Chat,
      active: ChatActive,
    },
  },
  {
    id: 6,
    path: "/calls",
    title: "Calls",
    icon: {
      default: Call,
      active: CallActive,
    },
  },
  {
    id: 7,
    path: "/grok",
    title: "Grok",
    icon: {
      default: Grok,
      active: GrokActive,
    },
  },
];
