import Quotation from './Quotation.svelte';
import Stockmovement from './stockmovement.svelte';
import Invoice from './invoice.svelte';
import Salereturn from './salereturn.svelte';
import Recivemoney from './recivemoney.svelte';
import Refund from './refund.svelte';
import Purchaseorder from './purchaseorder.svelte';
import Purchaseinvoice from './purchaseinvoice.svelte';
import Purchasereturn from './purchasereturn.svelte';
import Purchasemakepayment from './purchasemakepayment.svelte';
import purchaserefundSvelte from './purchaserefund.svelte';
import Checkoutcounter from './checkoutcounter.svelte';
import Poss from './poss.svelte';
import Expanseaccount from './expanseaccount.svelte';
import Stockadjustment from './stockadjustment.svelte';
import Stockvaluation from './stockvaluation.svelte';
import Customer from './customer.svelte';
import Vendor from './vendor.svelte';
import Products from './products.svelte';
import User from './user.svelte';
import Customercate from './customercate.svelte';
import Vendorcate from './vendorcate.svelte';
import Productcate from './productcate.svelte';
import Tax from './tax.svelte';
import Brand from './brand.svelte';
import Discount from './discount.svelte';
import Mpl from './mpl.svelte';
import Warehouse from './warehouse.svelte';
import Employ from './employ.svelte';
import AddQuotation from './addQuotation.svelte';
import Addsaleinvoice from './addsaleinvoice.svelte';
import Addrecivemoney from './addrecivemoney.svelte';
import addpurchaseorder from './addpurchaseorder.svelte';
import Addcustomerrefund from './addcustomerrefund.svelte';
import Addpurchaseinvoice from './addpurchaseinvoice.svelte';
import Addmakepaymet from './addmakepaymet.svelte';
import Addexpance from './addexpance.svelte';
import Addsalereturn from './addsalereturn.svelte';
import Addstockadjustment from './addstockadjustment.svelte';
import Addstockmovement from './addstockmovement.svelte';
import Addcheckoutcounter from './addcheckoutcounter.svelte';
import Addpurchaserefund from './addpurchaserefund.svelte';
import Addpurchasereturn from './addpurchase return.svelte';
// import app from '../main';






export const routes = {
  '/quotation': Quotation, 
  '/stock-movement': Stockmovement,
  '/invoice':Invoice,
  '/salereturn':Salereturn,
  '/recivemoney':Recivemoney,
  '/refund':Refund,
  '/purchaseorder':Purchaseorder,
  '/purchaseinvoice':Purchaseinvoice,
  '/purchasereturn':Purchasereturn,
  '/purchasemakepayment':Purchasemakepayment,
  '/purchaserefund':purchaserefundSvelte,
  '/checkoutcounter':Checkoutcounter,
  '/poss':Poss,
  '/expanseaccount':Expanseaccount,
  '/stockadjustment':Stockadjustment,
  '/stockvaluation':Stockvaluation,
  '/customer':Customer,
'/vendor':Vendor,
'/products':Products,
'/user':User,
'/customercate':Customercate,
  // Add more routes here
'/vendorcate':Vendorcate,
'/productcate':Productcate,
'/tax':Tax,
'/brand':Brand,
'/discount':Discount,
'/mpl':Mpl,
'/warehouse':Warehouse,
'/employ':Employ,
'/addQuotation':AddQuotation,
'/addsaleinvoice':Addsaleinvoice,
'/addrecivemoney':Addrecivemoney,
'/addpurchaseorder':addpurchaseorder,
'/addcustomerrefund':Addcustomerrefund,
'/addpurchaseinvoice':Addpurchaseinvoice,
'/addmakepaymet':Addmakepaymet,
'/addexpance':Addexpance,
'/addsalereturn':Addsalereturn,
'/addstockadjustment':Addstockadjustment,
'/addstockmovement':Addstockmovement,
'/addcheckoutcounter':Addcheckoutcounter,
'/addpurchaserefund':Addpurchaserefund,
'/addpurchasereturn':Addpurchasereturn,
// '/app':app,

};
