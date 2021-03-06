import { Request, Response } from 'express';
import { CreateSubscriberUseCase } from './CreateSubscriberUseCase';

export class CreateSubscriberController {
    constructor(
        private createSubscribeUseCase: CreateSubscriberUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const {
            name,
            gender,
            dateBirth,
            state,
            city,
            phone,
            whatsapp,
            email,
            accessibility,
            type,
            voluntaryOccupationArea,
            voluntaryNewArea,
            voluntaryOtherCheck,
            voluntaryOtherText,
            voluntaryReason,
            voluntaryAlreadyVoluntary,
            voluntaryPlace,
            voluntaryDisponibility,
            serviceOccupationArea,
            serviceNewArea,
            serviceOtherCheck,
            serviceOtherText,
            serviceWayOfWorking,
            serviceBillingWay,
            serviceSchooling,
            serviceTimeSegment,
            commercialOccupationArea,
            commercialOccupationArea2,
            commercialOtherCheck,
            commercialOtherText
        } = request.body;

        try {
            await this.createSubscribeUseCase.execute({
                name,
                gender,
                dateBirth,
                state,
                city,
                phone,
                whatsapp,
                email,
                accessibility,
                type,
                voluntaryOccupationArea: voluntaryOccupationArea || "",
                voluntaryNewArea: voluntaryNewArea || "",
                voluntaryOtherCheck,
                voluntaryOtherText: voluntaryOtherText || "",
                voluntaryReason: voluntaryReason || 0,
                voluntaryAlreadyVoluntary,
                voluntaryPlace: voluntaryPlace || "",
                voluntaryDisponibility: voluntaryDisponibility || 0,
                serviceOccupationArea: serviceOccupationArea || "",
                serviceNewArea: serviceNewArea || "",
                serviceOtherCheck,
                serviceOtherText: serviceOtherText || "",
                serviceWayOfWorking: serviceWayOfWorking || 0,
                serviceBillingWay: serviceBillingWay || 0,
                serviceSchooling: serviceSchooling || 0,
                serviceTimeSegment: serviceTimeSegment || 0,
                commercialOccupationArea: commercialOccupationArea || 0,
                commercialOccupationArea2: commercialOccupationArea2 || "",
                commercialOtherCheck,
                commercialOtherText: commercialOtherText || ""
            })

            return response.status(201).send()
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}