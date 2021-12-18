"use strict";

module.exports = {
  async logout(ctx) {
    ctx.cookies.set("token", null, {
      httpOnly: true,
      secure: true,
      sameSite:'none',
    });
    ctx.send({
      authorized: true,
      message: "Successfully destroyed session",
    });
  },
};