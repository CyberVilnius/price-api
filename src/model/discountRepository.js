import {doc, setDoc, getDoc} from 'firebase/firestore';

export default (db) => ({
  createDiscount: async (discount) => {
    await setDoc(doc(db, 'discounts', discount.code), discount);
  },

  getDiscount: async (code) => {
    const docSnap = await getDoc(doc(db, 'discounts', code));
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  },
});


/* Example of discount document data:

  'code': '123456',
  'wallets': {
      'hero': {
        'common': 'wallet_common_no_discount',
        'uncommon': 'wallet_uncommon_no_discount',
        'rare': 'wallet_rare_no_discount',
        'legendary': 'wallet_legendary_no_discount',
      },
    },
    'prices': {
      'common': 100,
      'uncommon': 200,
      'rare': 400,
      'legendary': 800,
    },
 */
