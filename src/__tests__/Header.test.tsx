import { render, screen } from "@testing-library/react";
import Header from "../components/layout/Header";
import { it } from "node:test";
import React from "react";
test("Headerコンポーネントのテスト", () => {
  it("正しくレンダリングされる", () => {
    render(<Header roomID="foobar" />);

    const HeaderElement = screen.getByTestId("header");

    expect(HeaderElement).toBeInTheDocument;
  });
});
