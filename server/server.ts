import { myRandomData } from "./MyOther.server";
import { Workshop } from "./classes/Workshop";

on("onResourceStart", (resName: string) => {
  if (resName === GetCurrentResourceName()) {
    console.log("TypeScript boilerplate started!");
    console.log(myRandomData);
  }
  new Workshop();
});
