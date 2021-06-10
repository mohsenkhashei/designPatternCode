import { AuditTrail } from './AuditTrail';

export abstract class Task {
    private auditTrail : AuditTrail;

    public constructor(auditTrail? : AuditTrail) { // question mark for make variable optional 
        if(auditTrail){
            this.auditTrail = auditTrail;
        }
        this.auditTrail = new AuditTrail();
    }

    execute(): void {
        this.auditTrail.record();
        this.doExecute();
    }

    protected abstract doExecute(): void;
}