// Copyright (C) 2020 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [propertyHelper.js]
---*/

const { Instant } = Temporal;
verifyProperty(Instant.prototype, Symbol.toStringTag, {
  value: "Temporal.Instant",
  writable: false,
  enumerable: false,
  configurable: true,
});
