import { catchErrorTyped } from "./catchErrorTyped";

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class CustomError extends Error {
  name = "CustomError";
  extraProp = "Error: test";
}

async function getUser(id: number) {
  await wait(1000);
  if (id === 2) {
    throw new CustomError("User not found");
  }

  return { id, name: "John Doe" };
}

(async function main() {
  const [error, user] = await catchErrorTyped(getUser(2), [CustomError]);

  if (error) {
    console.error(error.message);
  } else {
    console.log(user);
  }
})();
