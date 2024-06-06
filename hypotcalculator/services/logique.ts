interface Versement {
  periode: number;
  versement: number;
  balance: number;
}

function calculerVersementsHypothecaires(
  montantAchat: number,
  miseDeFonds: number,
  tauxAnnuel: number,
  dureeAnnees: number,
  unitMiseFonds: string,
  depositFrequency: string
): Versement[] {
  const tauxMensuel =
    tauxAnnuel / 100 / (depositFrequency === "monthly" ? 12 : 52);
  const nombreVersements =
    dureeAnnees * (depositFrequency === "monthly" ? 12 : 52);

  let montantPret = montantAchat;
  if (unitMiseFonds === "montant") {
    montantPret -= miseDeFonds;
  } else {
    montantPret -= (montantAchat * miseDeFonds) / 100;
  }

  const versementMensuel =
    (montantPret *
      (tauxMensuel * Math.pow(1 + tauxMensuel, nombreVersements))) /
    (Math.pow(1 + tauxMensuel, nombreVersements) - 1);

  const versements: Versement[] = [];
  let balance = versementMensuel * nombreVersements;
  versements.push({
    periode: 0,
    versement: 0,
    balance: balance,
  });
  for (let i = 1; i <= nombreVersements; i++) {
    balance = balance - versementMensuel;
    versements.push({
      periode: i,
      versement: versementMensuel,
      balance: balance,
    });
  }

  return versements;
}
export { calculerVersementsHypothecaires };
