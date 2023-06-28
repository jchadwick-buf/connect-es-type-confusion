import { ExampleService } from "./gen/example_connect";
import { createConnectTransport } from "@bufbuild/connect-web";
import { createPromiseClient } from "@bufbuild/connect";
import { MessageA, MessageB, MessageC } from "./gen/example_pb";

const transport = createConnectTransport({baseUrl: "http://localhost:1234"});
const client = createPromiseClient(ExampleService, transport);

client.requestA(new MessageA())
client.requestA(new MessageB())

client.requestB(new MessageA())
client.requestB(new MessageB())
client.requestB(new MessageC())

client.requestC(new MessageB())
client.requestC(new MessageC())

function Test(_: MessageA) {}
Test(new MessageA());
Test(new MessageB());
