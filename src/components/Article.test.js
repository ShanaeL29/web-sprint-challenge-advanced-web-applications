import React from "react";
import "@testing-library/jest-dom";

import userEvent from "@testing-library/user-event";
import MutationObserver from "mutationobserver-shim";

import Article from "./Article";
import { render, screen } from "@testing-library/react";

const testArticle = {
  id: 1,
  createdOn: "Test Date",
  image: "https://picsum.photos",
  headline: "Test Headline",
  author: "Test Author",
  summary: "Test Summary",
  body: "Test Body",
};

const testArticleWithoutAuthor = {
  id: 1,
  createdOn: "Test Date",
  image: "https://picsum.photos",
  headline: "Test Headline",
  author: null,
  summary: "Test Summary",
  body: "Test Body",
};

test("renders component without errors", () => {
  render(<Article article={testArticle} />);
});

test("renders headline, author from the article when passed in through props", () => {
  render(<Article article={testArticle} />);

  const headline = screen.queryByText(/test headline/i);
  const author = screen.queryByText(/test author/i);
  const summary = screen.queryByText(/test summary/i);
  const body = screen.queryByText(/test body/i);

  expect(headline).toBeInTheDocument();
  expect(headline).toBeTruthy();
  expect(headline).toHaveTextContent("Test Headline");

  expect(author).toBeInTheDocument();
  expect(author).toBeTruthy();
  expect(author).toHaveTextContent("Test Author");

  expect(summary).toBeInTheDocument();
  expect(summary).toBeTruthy();
  expect(summary).toHaveTextContent("Test Summary");

  expect(body).toBeInTheDocument();
  expect(body).toBeTruthy();
  expect(body).toHaveTextContent("Test Body");
});

test('renders "Associated Press" when no author is given', () => {
  render(<Article article={testArticleWithoutAuthor} />);
  const author = screen.queryByText(/associated press/i);
  expect(author).toBeInTheDocument();
});

test("executes handleDelete when the delete button is pressed", () => {
  render(<Article article={testArticle} />);
});

//Task List:
//1. Complete all above tests. Create test article data when needed.
