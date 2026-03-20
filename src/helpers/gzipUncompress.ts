// export function gzipUncompress(bytes: ArrayBuffer, toString: true): string;

import {gunzipSync, strFromU8} from 'fflate';
// import dT from './dT';

// export function gzipUncompress(bytes: ArrayBuffer, toString?: false): Uint8Array;
export default function gzipUncompress(bytes: ArrayBuffer, toString?: boolean): string | Uint8Array {
  // console.log(dT(), 'Gzip uncompress start');
  const inflated = gunzipSync(new Uint8Array(bytes));
  const result = toString ? strFromU8(inflated) : inflated;
  // console.log(dT(), 'Gzip uncompress finish'/* , result */);
  return result;
}
