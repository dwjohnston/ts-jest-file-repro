
import {createKinesisEvent} from "../createKinesisEvent";

describe("createKinesisEvent", () => {
    it("creates something", ()=> {
        const validSmsReplyEvent = {
            foo:"bar"
          };

          
          const kinesisEvent = createKinesisEvent(validSmsReplyEvent);

          expect(kinesisEvent.event.kinesis.data).toBeDefined();
    });
})