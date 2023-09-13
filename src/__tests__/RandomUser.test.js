import { fireEvent, render, screen } from "@testing-library/react";
import { RandomUser } from "components/RandomUser/RandomUser";
import axios from "axios";
jest.mock("axios");

describe("<RandomUser/>", () => {
  it("loads user when clicking on button", async () => {
    render(<RandomUser />);
    axios.get.mockResolvedValueOnce({ data: MOCK_USER_RESPONSE });
    const button = screen.getByRole("button");
    fireEvent.click(button);
    const titleEl = await screen.findByText("Aslak Bertheussen");
    screen.debug(titleEl);
    expect(titleEl.textContent).toBe("Aslak Bertheussen");
  });
});

const MOCK_USER_RESPONSE = {
  results: [
    {
      gender: "male",
      name: { title: "Mr", first: "Aslak", last: "Bertheussen" },
      location: {
        street: { number: 2897, name: "Anton Schjøths gate" },
        city: "Renbygda",
        state: "Vestfold",
        country: "Norway",
        postcode: "2223",
        coordinates: { latitude: "40.1445", longitude: "-75.2401" },
        timezone: {
          offset: "+5:30",
          description: "Bombay, Calcutta, Madras, New Delhi",
        },
      },
      email: "aslak.bertheussen@example.com",
      login: {
        uuid: "11b409f4-e70a-4634-a917-0ed8c04f1d78",
        username: "bigladybug144",
        password: "memory",
        salt: "3DcQAoqk",
        md5: "575eaf1026137b22b1d470167ac06ee1",
        sha1: "c70f9c447890b2821b712bda5ebc09886ca96a10",
        sha256:
          "c015758db57c1f1b97434c080f9cc142dde27412392d9022e318c9da73fd5e54",
      },
      dob: { date: "1994-06-15T09:40:07.169Z", age: 29 },
      registered: { date: "2019-07-03T16:10:52.174Z", age: 4 },
      phone: "70391845",
      cell: "93163124",
      id: { name: "FN", value: "15069431582" },
      picture: {
        large: "https://randomuser.me/api/portraits/men/51.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/51.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/51.jpg",
      },
      nat: "NO",
    },
  ],
  info: { seed: "18c3fdb762ad8b75", results: 1, page: 1, version: "1.4" },
};
