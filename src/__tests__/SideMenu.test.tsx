import { render, screen } from "@testing-library/react";
import SideMenu from "../components/SideMenu";
import { it } from "node:test";
import React from "react";
test("SideMenuコンポーネントのテスト", () => {
  it("正しくレンダリングされる", () => {
    render(<SideMenu roomID="foobar" />);

    const SideMenuElement = screen.getByTestId("sidemenu");

    expect(SideMenuElement).toBeInTheDocument;
  });
});
