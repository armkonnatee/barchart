import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('population')
export class Chart {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true})
    id: number;

    @Column({ type: 'varchar', name:'countryName' })
    countryName: string;

    @Column({ type: 'varchar', name:'year' })
    year: string;

    @Column({ type: 'varchar', name:'population' })
    population: string;

    @Column({ type: 'varchar', name:'children_of_1' })
    children_of_1: string;

    @Column({ type: 'varchar', name:'children_of_5' })
    children_5: string;

    @Column({ type: 'varchar', name:'children_of_15' })
    children_of_15: string;

    @Column({ type: 'varchar', name:'under_of_25' })
    under_of_25: string;

    @Column({ type: 'varchar', name:'under_15_of_64' })
    under_15_of_64: string;
    
    @Column({ type: 'varchar', name:'older_of_15' })
    older_of_15: string;

    @Column({ type: 'varchar', name:'older_of_18' })
    older_of_18: string;

    @Column({ type: 'varchar', name:'at_age_1' })
    at_age_1: string;

    @Column({ type: 'varchar', name:'at_age_1_to_4' })
    at_age_1_to_4: string;

    @Column({ type: 'varchar', name:'at_age_5_to_9' })
    at_age_5_to_9: string;

    @Column({ type: 'varchar', name:'at_age_10_to_14' })
    at_age_10_to_14: string;

    @Column({ type: 'varchar', name:'at_age_15_to_19' })
    at_age_15_to_19: string;

    @Column({ type: 'varchar', name:'at_age_20_to_29' })
    at_age_20_to_29: string;

    @Column({ type: 'varchar', name:'at_age_30_to_39' })
    at_age_30_to_39: string;

    @Column({ type: 'varchar', name:'at_age_40_to_49' })
    at_age_40_to_49: string;

    @Column({ type: 'varchar', name:'at_age_50_to_59' })
    at_age_50_to_59: string;

    @Column({ type: 'varchar', name:'at_age_60_to_69' })
    at_age_60_to_69: string;

    @Column({ type: 'varchar', name:'at_age_70_to_79' })
    at_age_70_to_79: string;

    @Column({ type: 'varchar', name:'at_age_80_to_89' })
    at_age_80_to_89: string;

    @Column({ type: 'varchar', name:'at_age_90_to_99' })
    at_age_90_to_99: string;

    @Column({ type: 'varchar', name:'older_than_100' })
    older_than_100: string;


}
