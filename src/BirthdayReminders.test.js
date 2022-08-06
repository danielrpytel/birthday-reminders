import { render, screen, within } from "@testing-library/react";
import { MemoryRouter, Routes, Route} from "react-router-dom";

import BirthdayReminders from "./BirthdayReminders";
import AllBirthdaysList from "./components/AllBirthdaysList";
import FriendCard from "./components/FriendCard";

test("Days filter should exist", async () => {
  render(
  <MemoryRouter>
   <BirthdayReminders /> 
  </MemoryRouter> 
  );
  const selectOptions = screen.getByRole("combobox", {
    name: "select by days"
  })

  expect(selectOptions).toBeInTheDocument();
});

test("Days filter should have correct number of options", async () => {
  render(
    <MemoryRouter>
      <BirthdayReminders /> 
    </MemoryRouter> 
  );
  const allOptions = screen.getAllByRole("option");

  expect(allOptions.length).toBe(5);
});

test("All friends should be rendered", async () => {
  render(
    <MemoryRouter>
      <AllBirthdaysList />
    </MemoryRouter>
  )

  const allFriends = screen.getAllByLabelText("friend row info");

  allFriends.map((friend) => {
    const picture = within(friend).getByLabelText("picture box");
    expect(picture).toBeInTheDocument();
    const fullName = within(friend).getByLabelText("full name");
    expect(fullName).toBeInTheDocument();
    const DOB = within(friend).getByLabelText("date of birth");
    expect(DOB).toBeInTheDocument();
    const daysToBday = within(friend).getByLabelText("days to bday");
    expect(daysToBday).toBeInTheDocument();
  })
});

test("No friend found message should be displayed on bad params", async () => {

  const noFriendFoundURL = "/friend-info/123456";

  render(
  <MemoryRouter initialEntries={[noFriendFoundURL]}>
    <Routes>
      <Route path="/friend-info/:id" element={<FriendCard />}/>
    </Routes>
  </MemoryRouter>
  )
  
  const message = screen.getByLabelText("not found");

  expect(message).toBeInTheDocument();
});

test("Landing on bad page display page not found message", async () => {

  render(
    <MemoryRouter initialEntries={["/something"]} >
      <BirthdayReminders />
    </MemoryRouter>
  )

  const message = screen.getByLabelText("page not found");

  expect(message).toBeInTheDocument();
});

