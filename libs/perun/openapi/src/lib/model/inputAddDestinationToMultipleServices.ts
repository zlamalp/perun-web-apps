/**
 * Perun RPC API
 * Perun Remote Procedure Calls Application Programming Interface
 *
 * The version of the OpenAPI document: 3.23.0
 * Contact: perun@cesnet.cz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { DestinationPropagationType } from './destinationPropagationType';
import { Service } from './service';
import { DestinationType } from './destinationType';


/**
 * input to addDestinationToMultipleServices
 */
export interface InputAddDestinationToMultipleServices { 
    services: Array<Service>;
    facility: number;
    destination: string;
    type: DestinationType;
    propagationType?: DestinationPropagationType;
}

