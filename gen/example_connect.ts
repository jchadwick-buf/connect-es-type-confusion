// @generated by protoc-gen-connect-es v0.10.1 with parameter "target=ts"
// @generated from file example.proto (package example.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Empty, MessageA, MessageB, MessageC } from "./example_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service example.v1.ExampleService
 */
export const ExampleService = {
  typeName: "example.v1.ExampleService",
  methods: {
    /**
     * @generated from rpc example.v1.ExampleService.RequestA
     */
    requestA: {
      name: "RequestA",
      I: MessageA,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc example.v1.ExampleService.RequestB
     */
    requestB: {
      name: "RequestB",
      I: MessageB,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc example.v1.ExampleService.RequestC
     */
    requestC: {
      name: "RequestC",
      I: MessageC,
      O: Empty,
      kind: MethodKind.Unary,
    },
  }
} as const;
