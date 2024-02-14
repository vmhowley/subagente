**free
// Compilar con el siguiente comando:
// CRTBNDRPG PGM(xyz) SRCFILE(QRPGLESRC)
// PGMINFO(*PCML)
// INFOSTMF('/path/to/myfile.pcml')

Ctl-Opt DFTACTGRP(*NO) ACTGRP('WEBAPI') PGMINFO(*PCML:*MODULE);

Dcl-F CUSTFILE Usage(*Input) Keyed PREFIX('CUST.');

Dcl-DS CUST ext extname('CUSTFILE') qualified End-DS;

Dcl-PI *N;
    CustNo like(Cust.Custno);
    Name   like(Cust.Name);
    Street like(Cust.Street);
    City   like(Cust.City);
    State  like(Cust.State);
    Postal like(Cust.Postal);
End-PI;

Dcl-PR QMHSNDPM ExtPgm('QMHSNDPM');
    MessageID Char(7) Const;
    QualMsgF Char(20) Const;
    MsgData Char(32767) Const options(*varsize);
    MsgDtaLen Int(10) Const;
    MsgType Char(10) Const;
    CallStkEnt Char(10) Const;
    CallStkCnt Int(10) Const;
    MessageKey Char(4);
    ErrorCode Char(8192) options(*varsize);
End-PR

Dcl-DS err qualified;
bytesProv Int(10) inz(0);
bytesAvail Int(10) inz(0);
End-DS;

Dcl-S MsgDta Varchar(1000);
Dcl-S MsgKey Char(4);
Dcl-S x Int(10);

 chain CustNo CUSTFILE;
if not %found;
    msgdta = 'Customer not found.';
    QMHSNDPM( 'CPF9897': 'QCPFMSG *LIBL': msgdta:
%len(msgdta): '*ESCAPE'
            : '*PGMBDY': 1: MsgKey: err );
else;
    Custno = Cust.Custno;
    Name = Cust.name;
    Street = Cust.Street;
    City = Cust.City;
    State = Cust.State;
    Postal = Cust.Postal;
endif;

*inlr = *on;