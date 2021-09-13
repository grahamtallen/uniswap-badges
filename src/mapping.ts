import { BigInt } from "@graphprotocol/graph-ts";
import {
  Contract,
  Approval,
  ApprovalForAll,
  Collect,
  DecreaseLiquidity,
  IncreaseLiquidity,
  Transfer,
} from "../generated/Contract/Contract";
import { log } from "@graphprotocol/graph-ts";
import { addBadgeAwardDataItem, awardBadge } from "./models";

export function handleApproval(event: Approval): void {
  let badgeAward = awardBadge(event.transaction.from.toHex(), event);
  addBadgeAwardDataItem(badgeAward, "action", "Some Action");
}

export function handleApprovalOld(event: Approval): void {}

export function handleApprovalForAll(event: ApprovalForAll): void {
  log.info("recieved an event {}", [event.transaction.from.toHex()]);
}

export function handleCollect(event: Collect): void {
  log.info("recieved an event {}", [event.transaction.from.toHex()]);
}

export function handleDecreaseLiquidity(event: DecreaseLiquidity): void {
  log.info("recieved an event {}", [event.transaction.from.toHex()]);
}

export function handleIncreaseLiquidity(event: IncreaseLiquidity): void {
  log.info("recieved an event {}", [event.transaction.from.toHex()]);
}

export function handleTransfer(event: Transfer): void {
  log.info("recieved an event {}", [event.transaction.from.toHex()]);
}
