import { ICustomerApplication } from '../view/customerApplication';

export class CustomerApplication implements ICustomerApplication {
id: number;
customerCode: String;
customerName: String;
customerAddressPrimary: String;
customerAddressSecondary: String;
customerPinCode: String;
customerEmailAddress: String;
customerPhoneNumber: number;
primaryContactPerson: String;
customerStatusCode: String;
approverPersonId: String;
approvedTime: Date;
approvalStatus: Date;
inactiveInd: String;
auditUserId: String;
auditStatus: number;
auditReason: String;
auditEntryDateTime: Date;
auditModifiedDateTime: Date;
isQueued: number;

}
