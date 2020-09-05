import {
  BasePrimitive,
  PairPrimitive,
  TripletPrimitive,
  QuartetPrimitive,
} from "../../primitive";
import { Expression } from "../../expression";

export type One = readonly [Expression<BasePrimitive>];

export type Two =
  | readonly [Expression<PairPrimitive>]
  | readonly [...One, ...One];

export type Three =
  | readonly [Expression<TripletPrimitive>]
  | readonly [...Two, ...One]
  | readonly [...One, ...Two];

export type Four =
  | readonly [Expression<QuartetPrimitive>]
  | readonly [...Three, ...One]
  | readonly [...One, ...Three]
  | readonly [...Two, ...Two];

export type Five =
  | readonly [...Three, ...Two]
  | readonly [...Two, ...Three]
  | readonly [...Four, ...One]
  | readonly [...One, ...Four];

export type Six =
  | readonly [...Five, ...One]
  | readonly [...One, ...Five]
  | readonly [...Four, ...Two]
  | readonly [...Two, ...Four]
  | readonly [...Three, ...Three];

export type Seven =
  | readonly [...Six, ...One]
  | readonly [...One, ...Six]
  | readonly [...Five, ...Two]
  | readonly [...Two, ...Five]
  | readonly [...Four, ...Three]
  | readonly [...Three, ...Four];

export type Eight =
  | readonly [...Seven, ...One]
  | readonly [...One, ...Seven]
  | readonly [...Six, ...Two]
  | readonly [...Two, ...Six]
  | readonly [...Five, ...Three]
  | readonly [...Three, ...Five]
  | readonly [...Four, ...Four];

export type Nine =
  | readonly [...Eight, ...One]
  | readonly [...One, ...Eight]
  | readonly [...Seven, ...Two]
  | readonly [...Two, ...Seven]
  | readonly [...Six, ...Three]
  | readonly [...Three, ...Six]
  | readonly [...Five, ...Four]
  | readonly [...Four, ...Five];

export type Ten =
  | readonly [...Nine, ...One]
  | readonly [...One, ...Nine]
  | readonly [...Eight, ...Two]
  | readonly [...Two, ...Eight]
  | readonly [...Seven, ...Three]
  | readonly [...Three, ...Seven]
  | readonly [...Six, ...Four]
  | readonly [...Four, ...Six]
  | readonly [...Five, ...Five];

export type Eleven =
  | readonly [...Ten, ...One]
  | readonly [...One, ...Ten]
  | readonly [...Nine, ...Two]
  | readonly [...Two, ...Nine]
  | readonly [...Eight, ...Three]
  | readonly [...Three, ...Eight]
  | readonly [...Seven, ...Four]
  | readonly [...Four, ...Seven]
  | readonly [...Six, ...Five]
  | readonly [...Five, ...Six];

export type Twelve =
  | readonly [...Eleven, ...One]
  | readonly [...One, ...Eleven]
  | readonly [...Ten, ...Two]
  | readonly [...Two, ...Ten]
  | readonly [...Nine, ...Three]
  | readonly [...Three, ...Nine]
  | readonly [...Eight, ...Four]
  | readonly [...Four, ...Eight]
  | readonly [...Seven, ...Five]
  | readonly [...Five, ...Seven]
  | readonly [...Six, ...Six];

export type Thirteen =
  | readonly [...Twelve, ...One]
  | readonly [...One, ...Twelve]
  | readonly [...Eleven, ...Two]
  | readonly [...Two, ...Eleven]
  | readonly [...Ten, ...Three]
  | readonly [...Three, ...Ten]
  | readonly [...Nine, ...Four]
  | readonly [...Four, ...Nine]
  | readonly [...Eight, ...Five]
  | readonly [...Five, ...Eight]
  | readonly [...Seven, ...Six]
  | readonly [...Six, ...Seven];

export type Fourteen =
  | readonly [...Thirteen, ...One]
  | readonly [...One, ...Thirteen]
  | readonly [...Twelve, ...Two]
  | readonly [...Two, ...Twelve]
  | readonly [...Eleven, ...Three]
  | readonly [...Three, ...Eleven]
  | readonly [...Ten, ...Four]
  | readonly [...Four, ...Ten]
  | readonly [...Nine, ...Five]
  | readonly [...Five, ...Nine]
  | readonly [...Eight, ...Six]
  | readonly [...Six, ...Eight]
  | readonly [...Seven, ...Seven];

export type Fifteen =
  | readonly [...Fourteen, ...One]
  | readonly [...One, ...Fourteen]
  | readonly [...Thirteen, ...Two]
  | readonly [...Two, ...Thirteen]
  | readonly [...Twelve, ...Three]
  | readonly [...Three, ...Twelve]
  | readonly [...Eleven, ...Four]
  | readonly [...Four, ...Eleven]
  | readonly [...Ten, ...Five]
  | readonly [...Five, ...Ten]
  | readonly [...Nine, ...Six]
  | readonly [...Six, ...Nine]
  | readonly [...Eight, ...Seven]
  | readonly [...Seven, ...Eight];

export type Sixteen =
  | readonly [...Fifteen, ...One]
  | readonly [...One, ...Fifteen]
  | readonly [...Fourteen, ...Two]
  | readonly [...Two, ...Fourteen]
  | readonly [...Thirteen, ...Three]
  | readonly [...Three, ...Thirteen]
  | readonly [...Twelve, ...Four]
  | readonly [...Four, ...Twelve]
  | readonly [...Eleven, ...Five]
  | readonly [...Five, ...Eleven]
  | readonly [...Ten, ...Six]
  | readonly [...Six, ...Ten]
  | readonly [...Nine, ...Seven]
  | readonly [...Seven, ...Nine]
  | readonly [...Eight, ...Eight];
