import { render, screen } from "@testing-library/react";
import ShareButton from "../components/ShareButton";
import { it } from "node:test";
import React from "react";
test("ShareButtonコンポーネントのテスト", () => {
  it("正しくレンダリングされる", () => {
    render(
      <ShareButton
        iconUrl="/icon/sns/x.svg"
        shareUrl={`http://twitter.com/share?url=https://docommunication.xyz/foobar&text=ここから編集に参加しましょう！&hashtags=#docommunication`}
        text="シェアする"
      />
    );

    const ShareButtonElement = screen.getByTestId("share-button");

    expect(ShareButtonElement).toBeInTheDocument;
  });
});
