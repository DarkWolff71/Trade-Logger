import {
  PageContent,
  FullWidthBg,
  FriendCard,
  SearchForNewFriends,
} from "@repo/ui";
import React from "react";

function Test() {
  return (
    <>
      <PageContent title="Test">
        <FullWidthBg className="flex flex-row">
          <FriendCard></FriendCard>
          <FriendCard></FriendCard>

          <FriendCard></FriendCard>

          <FriendCard></FriendCard>
        </FullWidthBg>
        <SearchForNewFriends></SearchForNewFriends>
      </PageContent>
    </>
  );
}

export default Test;
